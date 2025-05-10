import React from 'react'
import ProductBanner from '../ReusableComponents/ProductsComponents/ProductBanner'
import ProducstsSlider from '../ReusableComponents/CommonReuseComponents/ProducstsSlider/ProducstsSlider'
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection'
import CompanySlider from '../ReusableComponents/CommonReuseComponents/CompanySlider/CompanySlider'

function Product() {
  return (
<>
<ProductBanner/>
<ProducstsSlider/>
<RequestSection/>
<CompanySlider/>
</>
  )
}

export default Product