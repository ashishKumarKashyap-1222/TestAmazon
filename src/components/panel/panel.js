import React, { useState, useEffect } from 'react'
import { Button, Card, CheckBox, Badge, FlexLayout, TextStyles } from "@cedcommerce/ounce-ui"
import { Grid } from "../../Shared"
import Data from "../../product.json"

function Panel() {
    const [rows, setrows] = useState([]);
    // console.log(Data);


    useEffect(() => {
        let rowData = [];
        Data.forEach(item => {
            console.log(item);
            rowData.push({
                Variants: (
                    item['variant_attributes'].length > 0 ? <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none" class="__web-inspector-hide-shortcut__">
                            <rect y="2" width="24" height="24" rx="12" fill="#FDFAFA" />
                            <path d="M8 12L12 16L16 12" stroke="#595656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div> : null

                ),
                Product: (
                    <>
                        <FlexLayout childWidth='fullWidth'>
                            <img alt="asdf" height='80' src='https://source.unsplash.com/collection/190727/100x100'></img>
                            <FlexLayout direction='vertical' valign='end'>

                                <TextStyles textcolor='light' type='neutralText'>{item['title'].length > 100 ? item['title'] : item['title']}</TextStyles>
                                <TextStyles textcolor='positive' type='simpleText'>{item['sku']}</TextStyles>
                            </FlexLayout>

                        </FlexLayout>
                    </>
                ),

                amz_status: <Badge size='small' type="Warning" >{item['marketplace']['amazon'][0]['status']}</ Badge>,
                amz_SKU: item['sku'] || "null",
                Actions: <Button type='Plain'>Add to Amazon</Button>



            })


        })
        setrows(rowData)
        // return () => {
        //     cleanup
        // }
    }, [])



    const column = {
        Variants: {
            alignment: 'left',
            filter: false,
            show: true,
            name: 'Variants',
            type: 'string',
            width: '50',
        },
        Product: {
            alignment: 'left',
            filter: false,
            show: true,
            name: 'Product',
            type: React,
            // width: '150',
        },

        amz_status: {
            alignment: 'right',
            filter: false,
            show: true,
            name: 'Amazon Status',
            type: 'string',
            // width: '70',
        },
        amz_SKU: {
            alignment: 'right',
            filter: false,
            show: true,
            name: 'Amazon SKU',
            type: 'string',
            // width: '70',
        },
        Actions: {
            alignment: 'right',
            filter: false,
            show: true,
            name: 'Actions',
            type: 'string',
            // width: '70',
        },

    };
    return (
        <>
            <Grid
                columns={column}
                enableSelect="true"
                according={null}
                hasChild='true+'
                rows={rows}>


            </Grid>
        </>
    )
}

export default Panel
