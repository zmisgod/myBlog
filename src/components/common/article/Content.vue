<template>
    <div v-html="articleContent"></div>
</template>
<script>
export default {
  props: {
    articleContent: String
  }
};
</script>

<style lang="scss">
.main-content {
  font-size: 1em;
  border-bottom: 1px solid #fff;
  overflow: auto;
  word-break: break-all;
  margin-top: 30px;
  padding: 0 10px;
  p {
    padding: 0.3em 1em;
    line-height: 2em;
    color: #444343;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 20px 0;
    color: #b35353;
  }
  strong {
    padding: 20px 0;
    color: #b35353;
  }
  ol,
  ul {
    list-style: lao;
  }
  ol,
  ul {
    padding-left: 25px;
    li {
      list-style: lao;
      padding: 10px 0;
    }
  }
  pre {
    border: 1px solid #eee !important;
    border-radius: 4px;
    overflow: auto;
    -webkit-box-shadow: 1px 1px 4px #7d2b2b;
    box-shadow: 1px 1px 4px #f1f1f1;
    margin: 1px 15px;
    padding-left: 10px;
    code {
      line-height: 2em;
    }
  }
  blockquote {
    border-left: 10px solid #f66;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #f8f8f8;
    font-weight: 600;
    p {
      color: #42b983;
    }
  }
  img {
    display: flex;
    margin: 20px 0;
    border-radius: 4px;
  }
  em {
    color: #42b983;
    font-weight: 500;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    overflow: hidden;
    tbody {
    }
    thead {
      word-break: keep-all;
      white-space: nowrap;
      th {
        word-break: keep-all;
        white-space: nowrap;
        text-align: left;
        padding: 0.6em 1em 0.6em 0;
      }
    }
    tr {
      border-bottom: 1px solid #eee;
      td {
        white-space: nowrap;
        word-break: keep-all;
        padding: 0.6em 1em 0.6em 0;
      }
    }
  }
}
</style>
