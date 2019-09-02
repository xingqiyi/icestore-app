import React from 'react'
import { Form, Input } from '@alifd/next';

import stores from '../../../stores'



const FormItem = Form.Item;



const Filter = () => {

    const list = stores.useStore('list')

    function handleSubmit(v) {
        console.log(v);
        list.pageTo(5)

    }

    return (
        <div>

            <Form inline>


                <FormItem label="Password:" required hasFeedback={false}>
                    <Input name="inlinePass" placeholder="Please enter your password!" />
                </FormItem>

                <FormItem label=" ">
                    <Form.Submit onClick={handleSubmit}>Submit</Form.Submit>
                </FormItem>
            </Form>


        </div>
    )
}
export default Filter;