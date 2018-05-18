<template>
  <div>
    <sidc-picker-select :items="symbolSets" label="Symbol set" v-model="symbolSetValue" :autocomplete="autocomplete" />
    <sidc-picker-select :items="statusValues" label="Status" v-model="statusValue" :autocomplete="autocomplete" :simple-status-modifier="simpleStatusModifier" />
    <sidc-picker-select :items="hqTfDummy" v-model="hqTfDummyValue" label="Headquarters/Task force/Dummy" :autocomplete="autocomplete" />
    <sidc-picker-select :items="emtValues" v-model="emtValue" label="Echelon/Mobility/Towed array" :autocomplete="autocomplete" />
    <sidc-picker-select :items="icons" label="Main icon" v-model="iconValue" :autocomplete="autocomplete" />
    <sidc-picker-select :items="modifierOne" label="Modifier 1" :autocomplete="autocomplete" v-model="mod1" />
    <sidc-picker-select :items="modifierTwo" label="Modifier 2" :autocomplete="autocomplete" v-model="mod2" />
  </div>
</template>

<script>
import Vue from "vue";
import { app6d } from "milstd";
import MilSymbol from "./MilSymbol.vue";
import { Sidc } from "../symbology/sidc";
import SidcPickerSelect from "./SidcPickerSelect.vue";
import {
  DISMOUNTED_SYMBOLSET_VALUE,
  EQUIPMENT_SYMBOLSET_VALUE,
  HQTFDummyValues,
  statusValues,
  SUBSURFACE_SYMBOLSET_VALUE,
  SURFACE_SYMBOLSET_VALUE,
  UNIT_SYMBOLSET_VALUE
} from "../symbology/values";
import * as symbValues from "../symbology/values";

export default {
  name: "SidcPicker",
  components: {
    MilSymbol,
    SidcPickerSelect
  },

  props: {
    value: String,
    required: { type: Boolean, default: false },
    label: { type: String, default: "SIDC" },
    hint: { type: String, default: "Symbol identification code" },
    rules: { type: Array },
    autocomplete: { type: Boolean, default: true },
    simpleStatusModifier: { type: Boolean, default: false }
  },

  data() {
    return {
      myValue: null,
      isOpen: false,
      sidValue: null,
      symbolSetValue: null,
      statusValue: null,
      hqTfDummyValue: null,
      emtValue: null,
      iconValue: null,
      mod1: null,
      mod2: null
    };
  },

  created() {
    this.sidc = this.value;
  },

  watch: {
    value(v) {
      this.sidc = v;
    },

    sidc(value) {
      this.$emit("input", value);
    }
  },

  computed: {
    symbolSets() {
      let ssets = [];
      for (let key in app6d) {
        ssets.push({
          value: key,
          text: app6d[key].name,
          sidc: "100" + this.sidValue + key + "00000000000000"
        });
      }
      ssets.sort((a, b) => a.value - b.value);
      return ssets;
    },

    symbolSet() {
      return app6d[this.symbolSetValue]["main icon"] || [];
    },

    statusValues() {
      return statusValues.map(e => ({
        ...e,
        sidc:
          "100" +
          this.sidValue +
          this.symbolSetValue +
          e.value +
          "0000000000000"
      }));
    },

    hqTfDummy() {
      return HQTFDummyValues.map(e => ({
        ...e,
        sidc:
          "100" +
          this.sidValue +
          this.symbolSetValue +
          "0" +
          e.value +
          "000000000000"
      }));
    },

    emtValues() {
      let values;
      switch (this.symbolSetValue) {
        case UNIT_SYMBOLSET_VALUE:
          values = symbValues.echelonValues;
          break;
        case EQUIPMENT_SYMBOLSET_VALUE:
          values = symbValues.mobilityValues;
          break;
        case DISMOUNTED_SYMBOLSET_VALUE:
          values = symbValues.leadershipValues;
          break;
        case SURFACE_SYMBOLSET_VALUE:
        case SUBSURFACE_SYMBOLSET_VALUE:
          values = symbValues.towedArrayValues;
          break;
        default:
          values = [{ value: "00", text: "Unspecified" }];
      }
      return values.map(e => ({
        ...e,
        sidc:
          "100" +
          this.sidValue +
          this.symbolSetValue +
          "00" +
          e.value +
          "0000000000"
      }));
    },

    icons() {
      let mis = this.symbolSet;
      return mis.map(mi => {
        let text = mi.entity;
        if (mi["entity type"]) text += " - " + mi["entity type"];
        if (mi["entity subtype"]) text += " - " + mi["entity subtype"];
        return {
          value: mi.code,
          text,
          sidc:
            "100" +
            this.sidValue +
            this.symbolSetValue +
            "0000" +
            mi.code +
            "0000"
        };
      });
    },

    modifierOne() {
      let mod1s = app6d[this.symbolSetValue]["modifier 1"] || [];
      return mod1s.map(mod1 => ({
        value: mod1.code,
        text: mod1.modifier,
        sidc:
          "100" +
          this.sidValue +
          this.symbolSetValue +
          "0000000000" +
          mod1.code +
          "00"
      }));
    },

    modifierTwo() {
      let mod2s = app6d[this.symbolSetValue]["modifier 2"] || [];
      return mod2s.map(mod2 => ({
        value: mod2.code,
        text: mod2.modifier,
        sidc:
          "100" +
          this.sidValue +
          this.symbolSetValue +
          "0000000000" +
          "00" +
          mod2.code
      }));
    },

    sidc: {
      get() {
        if (!this.myValue) return;
        
        let sidc = new Sidc(this.myValue);        
        sidc.symbolSet = this.symbolSetValue;
        sidc.status = this.statusValue;
        sidc.hqtfd = this.hqTfDummyValue;
        sidc.amplifier = this.emtValue[0];
        sidc.amplifierDescriptor = this.emtValue[1];
        sidc.entity = this.iconValue.substr(0, 2);
        sidc.entityType = this.iconValue.substr(2, 2);
        sidc.entitySubType = this.iconValue.substr(4, 2);
        sidc.modifierOne = this.mod1;
        sidc.modifierTwo = this.mod2;
        return sidc.toString();
      },

      set(value) {
        this.myValue = value;
        let sidc = new Sidc(value);
        this.sidValue = sidc.standardIdentity;
        this.symbolSetValue = sidc.symbolSet;
        this.statusValue = sidc.status;
        this.hqTfDummyValue = sidc.hqtfd;
        this.emtValue = sidc.amplifier + sidc.amplifierDescriptor;
        this.iconValue = sidc.entity + sidc.entityType + sidc.entitySubType;
        this.mod1 = sidc.modifierOne;
        this.mod2 = sidc.modifierTwo;
      }
    }
  },

  methods: {
    
  }
};
</script>

<style scoped>
</style>
