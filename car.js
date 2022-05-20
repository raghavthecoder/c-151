AFRAME.registerComponent("car",{
    schema:{
      
        model:{type:"string",default: "hello"}

    },


init: function() {
    
    this.el.setAttribute("gltf-model",this.data.model);
    const position ={ x:2 , y:1 , z:1};
    const rotation ={x:0,y:0,z:0};

    this.el.setAttribute("position",position);
    this.el.setAttribute("rotation",rotation);
    this.el.setAttribute("scale",{x:20,y:22,z:25});
}


})