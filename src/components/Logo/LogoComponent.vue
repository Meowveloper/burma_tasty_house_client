<template>
  <div ref="B" :style="dynamicStyles">B</div>
</template>

<script>
export default {
  name: "LogoComponent",

  props: {
    position: {
      type: String,
      default: "absolute",
    },

    top: {
      type: String,
      default: "10%",
    },

    left: {
      type: String,
      default: "10%",
    },

    parameters: {
      type: String,
      default: `${window.innerWidth * (6.5 / 100)}px`,
    },

    fontSize: {
      type: String,
      default: `${window.innerWidth * (6.5 / 100) - ((window.innerWidth * (6.5 / 100)) * (40/100))}px`,
    },
  },

  data() {
    return {
      theStyle: {
        position: this.position,
        top: this.top,
        left: this.left,
        backgroundColor: "#3D8B22",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: "50%",
      },

      styleFor1280px: {
        ...this.theStyle,
        "@media screen and (max-width:1280px)": { top: "2%", left: "2%" },
      },
    };
  },

  computed: {
    dynamicStyles() {
      return {
        ...this.theStyle,
        width: this.parameters,
        height: this.parameters,
        lineHeight: this.parameters,
        fontSize: this.fontSize,
      };
    },
  },
};
</script>

<style lang="css" scoped></style>
