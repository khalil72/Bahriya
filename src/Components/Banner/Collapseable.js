import { Button } from '@mui/material';
import React from 'react'
import useCollapse from 'react-collapsed';

export const Collapseable = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div>
        <div className="collapsible">
        <Button   className="header" {...getToggleProps()}>
        {isExpanded ? 'Collapse' : 'Expand'}
                </Button>
        {/* <div>
           
        </div> */}
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>
    </div>
  )
}
