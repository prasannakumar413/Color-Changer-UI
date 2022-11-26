import React, { useState } from 'react'
import Select from 'react-select'
import './Dropdown.css'
function Form() {
  var colors=[
             {
               label : 'Lime',
    
                value : 'lime'
    
            },
    
            {
    
                label : 'Lavender',
    
                value : 'lavender'
    
            },
    
            {
    
                label : 'Crimson',
    
                value : 'crimson'
    
            },
    
            {
    
                label : 'Darkblue',
    
                value : 'darkblue'
    
            },
    
            {
    
                label : 'Teal',
    
                value : 'teal'
    
            },
    
            {
    
                label : 'Rebecca Purple',
    
                value : 'rebeccapurple'
    
            },
    
            {
    
                label : 'Ghost White',
                value : 'ghostwhite'
            },
    
            {
    
                label : 'Aqua Marine',
                value : 'aquamarine'
            },
            {
               label : 'Alice Blue',

                value : 'aliceblue'
    
            }
    
    ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <>
      <div className='h'>
      <Select options={colors} onChange={ddlhandle} className="sl">
        </Select>
      </div>
      <center>
        <div className='drop'>
            <style>{'.drop {background-color:'+setbgcolor+';}'}</style>
        </div>
        </center>
    </>
  )
}

export default Form