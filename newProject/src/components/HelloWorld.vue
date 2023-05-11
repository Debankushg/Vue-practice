

<template>
  <h1>{{ greet }}</h1>
  <div v-text="name"></div>
  <div v-html="channel"></div>
  <div v-html="hack"></div>
  <div v-bind:id="HeadingId">Hello India</div>
  <button v-bind:disabled="isDisabled">Click me</button>

  <h2 class='underline' v-bind:class="status">Status</h2>

  <h2 v-bind:class="ispromoted && 'promoted'">Promoted</h2>

  <h2 v-bind:class="isSoldout?'sold-out':'new'">Sold-out</h2>

  <h2 v-bind:class="['new','promoted']">Newly Movies</h2>

  <h2 v-bind:class="[ispromoted && 'promoted', isSoldout?'sold-out':'new']">Star Movies</h2>

  <h3 v-bind:class="{
    promoted:ispromoted,
    new:!isSoldout,
    'sold-out':isSoldout
  }">Object conditional</h3>

  <h2 v-bind:style="{color:highlightColor,'font-size':headerSize+'px', paddingLeft:'20px', margin:'0px'}">Inline Style</h2>

  <h2 :style="headerStyleObject">Style Object</h2>
  
  <div v-bind:style="[successStyleObj,baseStyleObj]">Success</div>
 
  <!-- Instead od v-bind use only: -->
  <div :style="[dangerStyleObj,baseStyleObj]">Danger</div>

</template>


<script >
export default {
  name: "HelloWorld",
  data() {
    return {
      greet: "Deb",
      name:'Superman',
      channel:'<b> I am A Peace loving boy</b>',
      hack: `<h2><a herf='#' onClick="alert('You have been hacked')">Win A Prize</a></h2>`,
      HeadingId:"headings",
      isDisabled:true,
      status:'success',
      ispromoted:false,
      isSoldout:true,
      highlightColor:'orange',
      headerSize:50,

      // object Style property
      headerStyleObject:{
        color:'green',
        fontSize:'20px',
        paddingLeft:'50px',
      },
      baseStyleObj:{
        fontSize:'50px',
        paddingLeft:'10px',
        margin:'0px'
      },
      successStyleObj:{
        color:'Blue',
        backgroundColor:'lightgreen',
        border: ' 1px solid red'
      },
      dangerStyleObj:{
        color:'darkred',
        backgroundColor:'pink',
        border:'1px solid green'
      },
    };
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #584da8;
  cursor: pointer;
}
.underline{
  text-decoration: underline;
  color:rgb(126, 2, 2);
}

.promoted{
  font-style:italic;
}
.new{
  color:olivedrab;
}
.sold-out{
  color:red
}

</style>
