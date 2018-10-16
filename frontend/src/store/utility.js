export const updateObject = (oldObject, updateValues)=>{
      return { ...oldObject,
              ...updateValues
      };

};

const ca=(obj)=>(
  {
    go: ()=>ca(obj),
    def: ()=>obj
  }
);

export const ac = (act)=>(
  {
    go: (a, o)=> (act === a ? ca(o) : ac(act)),
    def: ()=>false
}
);
