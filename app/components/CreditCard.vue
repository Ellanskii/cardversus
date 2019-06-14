<template lang="pug">
	.credit-card
		.credit-card-content
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.credit-card {
  position: relative;
  padding-top: 63.08%;
  border-radius: 3.5%/5.56%;
  background: $credit-card-background;

  &.is-hoverable {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 3.5%/5.56%;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    &:before {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    &:after {
      background-image: linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 200%;
      background-position: right;
    }
    &:hover {
      transform: scale(1.1, 1.1);
      &:before {
        opacity: 1;
      }
      &:after {
        opacity: 1;
        background-position: left;
      }
    }
  }

  &-content {
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  &.is-rocketbank {
    // background-image: url('~assets/card-backgrounds/rocketbank.svg');
    background-image: url('~assets/card-backgrounds/rocketbank-front.png');
    background-size: cover;
  }
  &.is-alfabank {
    background-image: url('~assets/card-backgrounds/alfabank.png');
    background-size: cover;
  }
  &.is-tinkoff {
    background-color: #1f2024;
    background-image: url('~assets/card-backgrounds/tinkoff.png');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
