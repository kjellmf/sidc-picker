<template>
  <div>
    <!--
    <v-layout row wrap>
      <v-flex xs12 md5>
        <sidc-picker-select :items="contextValues" label="Context" v-model="contextValue" :autocomplete="autocomplete" />
      </v-flex>
      <v-flex xs12 md7>
        <sidc-picker-select :items="sidValues" label="Standard identity" v-model="sidValue" :autocomplete="autocomplete" />
      </v-flex>
    </v-layout>
    -->
    <sidc-picker-select
      :items="contextValues"
      v-model="contextValue"
      :autocomplete="autocomplete"
      label="Context"/>
    <sidc-picker-select
      :items="sidValues"
      v-model="sidValue"
      :autocomplete="autocomplete"
      label="Standard identity"/>
    <sidc-picker-select
      :items="symbolSets"
      v-model="symbolSetValue"
      :autocomplete="autocomplete"
      label="Symbol set"/>
    <sidc-picker-select
      :items="statusValues"
      v-model="statusValue"
      :autocomplete="autocomplete"
      :simple-status-modifier="simpleStatusModifier"
      :key="simpleStatusModifier"
      label="Status"/>
    <sidc-picker-select
      :items="hqTfDummy"
      v-model="hqTfDummyValue"
      :autocomplete="autocomplete"
      label="Headquarters/Task force/Dummy"/>
    <sidc-picker-select
      :items="emtValues"
      v-model="emtValue"
      :autocomplete="autocomplete"
      label="Echelon/Mobility/Towed array"/>
    <sidc-picker-select
      :items="icons"
      v-model="iconValue"
      :autocomplete="autocomplete"
      label="Main icon"
      @selectedItem="handleIconItem"/>
    <sidc-picker-select
      :items="modifierOne"
      :autocomplete="autocomplete"
      v-model="mod1"
      label="Modifier 1"/>
    <sidc-picker-select
      :items="modifierTwo"
      :autocomplete="autocomplete"
      v-model="mod2"
      label="Modifier 2"/>
  </div>
</template>

<script>

import {app6d, ms2525d} from "milstd";
import MilSymbol from "./MilSymbol.vue";
import {Sidc} from "../symbology/sidc";
import SidcPickerSelect from "./SidcPickerSelect.vue";
import {
  DISMOUNTED_SYMBOLSET_VALUE,
  EQUIPMENT_SYMBOLSET_VALUE,
  HQTFDummyValues,
  contextValues,
  sidValues,
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
    required: {type: Boolean, default: false},
    label: {type: String, default: "SIDC"},
    hint: {type: String, default: "Symbol identification code"},
    rules: {type: Array},
    autocomplete: {type: Boolean, default: true},
    simpleStatusModifier: {type: Boolean, default: false},
    standard: {type: String, default: "APP6"}
  },

  data() {
    return {
      myValue: null,
      isOpen: false,
      contextValue: null,
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

  computed: {
    cstandard() {
      if (this.standard === "APP6") {
        return app6d;
      }
      return ms2525d;
    },

    symbolSets() {
      const ssets = [];
      const standard = this.cstandard;
      for (const key in standard) {
        ssets.push({
          value: key,
          text: standard[key].name,
          sidc: `10${this.contextValue}${this.sidValue}${key}00000000000000`
        });
      }
      ssets.sort((a, b) => a.value - b.value);
      return ssets;
    },

    contextValues() {
      return contextValues.map(e => ({
        ...e,
        sidc: `10${e.value}${this.sidValue}${this.symbolSetValue}00000000000000`
      }));
    },

    sidValues() {
      return sidValues.map(e => ({
        ...e,
        sidc: `10${this.contextValue}${e.value}${this.symbolSetValue}00000000000000`
      }));
    },

    symbolSet() {
      return this.cstandard[this.symbolSetValue]["main icon"] || [];
    },

    statusValues() {
      return statusValues.map(e => ({
        ...e,
        sidc: `10${this.contextValue}${this.sidValue}${this.symbolSetValue}${e.value}0000000000000`
      }));
    },

    hqTfDummy() {
      return HQTFDummyValues.map(e => ({
        ...e,
        sidc: `10${this.contextValue}${this.sidValue}${this.symbolSetValue}0${e.value}000000000000`
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
          values = [{value: "00", text: "Unspecified"}];
      }
      return values.map(e => ({
        ...e,
        sidc:
        `10${
          this.contextValue
        }${this.sidValue
        }${this.symbolSetValue
        }00${
          e.value
        }0000000000`
      }));
    },

    icons() {
      const mis = this.symbolSet;
      return mis.map((mi) => {
        let text = mi.entity;
        if (mi["entity type"]) text += ` - ${mi["entity type"]}`;
        if (mi["entity subtype"]) text += ` - ${mi["entity subtype"]}`;
        return {
          value: mi.code,
          text,
          sidc: `10${this.contextValue}${this.sidValue}${this.symbolSetValue}0000${mi.code}0000`
        };
      });
    },

    modifierOne() {
      const mod1s = this.cstandard[this.symbolSetValue]["modifier 1"] || [];
      return mod1s.map(mod1 => ({
        value: mod1.code,
        text: mod1.modifier,
        sidc: `10${this.contextValue}${this.sidValue}${this.symbolSetValue}0000000000${mod1.code}00`
      }));
    },

    modifierTwo() {
      const mod2s = this.cstandard[this.symbolSetValue]["modifier 2"] || [];
      return mod2s.map(mod2 => ({
        value: mod2.code,
        text: mod2.modifier,
        sidc: `10${this.contextValue}${this.sidValue}${this.symbolSetValue}000000000000${mod2.code}`
      }));
    },

    sidc: {
      get() {
        if (!this.myValue) return;

        const sidc = new Sidc(this.myValue);
        sidc.context = this.contextValue;
        sidc.standardIdentity = this.sidValue;
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
        const sidc = new Sidc(value);
        this.contextValue = sidc.context;
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

  watch: {
    value(v) {
      this.sidc = v;
    },

    sidc(value) {
      this.$emit("input", value);
    }
  },

  created() {
    this.sidc = this.value;
  },

  methods: {
    handleIconItem(item) {
      this.$emit('iconDescription', item.text);
    }
  }
};
</script>

<style scoped>
</style>
