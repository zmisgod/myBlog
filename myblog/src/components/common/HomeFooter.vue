<template>
  <footer>
      <div class="showfooter">
        <div class="zangmiao-loves-you">
          <a>zangmiao loves you</a>
        </div>
      </div>
  </footer>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
footer{
    width: 100%;
    height: 100%;
    background-color: #395762;
    .showfooter{
        display: flex;
        justify-content: center;
        padding: 50px;
        .zangmiao-loves-you{
            width: 160px;
            position: relative;
            text-align: center;
            &:hover{
                cursor: pointer;
                &:before{
                    left: -2px;
                    opacity: 1;
                }
                &:after{
                    right: -2px;
                    opacity: 1;
                }
            }
            &:before{
                left: -6px;
                opacity: 0;
                content: "\2665";
                color: #eee;
                position: absolute;
                top: 2px;
                width: 20px;
                height: 20px;
                transition: all 0.3s;
                transform: translate3d(0, 0, 0);
            }
            &:after{
                right: -6px;
                opacity: 0;
                content: "\2665";
                color: #eee;
                position: absolute;
                top: 2px;
                width: 20px;
                height: 20px;
                transition: all 0.3s;
                transform: translate3d(0, 0, 0);
            }
            a{
                text-align: center;
                color: #fff !important;
                &:hover{
                    text-decoration: none;
                }
            }
        }
    }
}
@media all and (max-width: 1023px) {
    footer{
        
    }
}
</style>
