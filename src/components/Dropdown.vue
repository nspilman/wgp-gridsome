<template>
  <li 
      class="top-level-item parent">
      <span id="title">
            {{title}} <p class='dropdown-tag'>&#9660;</p>
        </span>
        <ul class="child-group">
          <li class="child" v-for="item in items" :key="item.title">
            <a :href="item.link">{{item.title}}</a>
            </li>
        </ul>
      </li>

</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"Item"
        },
        items:{
            type:Array,
            default(){
                return [
                    {
                        title:'itemOne',link:"#"
                        }
                    ]
                }
        }
    },
    name:"Dropdown",
    data(){
        return{
        }
    },
}
</script>

<style scoped>

.dropdown-tag{
    padding:0;
    margin:0;
    font-size:8px;
}

.child-group {
    padding-inline-start: 0;
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    list-style: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#title{
    display:flex;
    flex-direction: column;
}

.dropdown-content a:hover {background-color: #ddd;}

.parent:hover .child-group {display: flex;}

.child{
    position: relative;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #222;
    list-style: none;
    background-color:white;
}

.child > a{
text-align: center;
    display: block;
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
    padding: 10px 15px;
    text-transform: uppercase;
    color: #696969;
    line-height: 25px;
    -webkit-transition: ease .3s;
    -o-transition: ease .3s;
    transition: ease .3s;
    text-decoration: none;
    white-space: nowrap;
    background-color: white;
}
</style>