import React from 'react'
import Grid from '../Grid/Grid'
import IconBtn from '../Button/iconButton'

export default props => (
    <div role="form" className="todoForm">
         <div className="row">
            <Grid cols='12 9 10'>
                <input id="description" className="form-control" placeholder="add a task"/>
            </Grid>
            <Grid cols='12 3 2'>
                <IconBtn style="primary" icon="plus"></IconBtn>
            </Grid>
        </div>   
    </div>
)