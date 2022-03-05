import React from 'react'
import MainNavBar from '../../components/MainNavBar/MainNavBar'
import MainSideBar from '../../components/MainSideBar/MainSideBar'
import BrContent from '../../components/Content/BrContent'

function BackLogReport() {
    return (
        <div>
            <MainNavBar />

            <div className="page-content">
                <MainSideBar />
                <BrContent heading={['Doc-Num','Customer-Code','Customer-Name','Customer-PO','Customer-PO-Date','SaleOrder-Number','SaleOrder-Date','WareHouse','ABGP','Item-Code','Item-Description','Item-Short-Description',"Item-Category-Code","Item-Category-Description","Item-Amount-GroupCode","Item-Amount-Group-Description","Ref1","Ref2","Uom","Ordered-Qty","Allowcated-Qty","Issued-Qty","Shiped-Qty","Invoice-Qty","BackOrder-Qty","SO-Remaining-Qty","Unit-Rate","Discount","Discount-Amount","Gross-Amount","Required-Date","Direct-Pick-Qty","Bill-&-Hold-Qty","Packed-Qty","Picek-Qty","Customer-Bill-to-ID","Customer-Ship-to-ID"]} table="Home" />
            </div>
        </div>
    )
}

export default BackLogReport