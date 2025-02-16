<template>
    <button
      :class="['fui-btn', `data-variant-${variant}`]"
      :data-ripple="ripple"
      :role="role"
      :aria-label="ariaLabel"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: "FUIButton",
    props: {
      variant: {
        type: String,
        default: "primary",
      },
      ripple: {
        type: Boolean,
        default: true,
      },
      role: {
        type: String,
        default: "button",
      },
      ariaLabel: {
        type: String,
        default: "",
      },
    },
    methods: {
      handleClick(event) {
        this.$emit("click", event);
      },
    },
  };
  </script>
  
  <style>
  /* Add optional custom styles for the buttons if needed */
  </style>
  