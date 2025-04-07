import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from '../page/ProductsPage'
import ProductsLayout from '../components/Products/Layout/ProductsLayout'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/'  element={<ProductsLayout/>} >
            <Route index element={<ProductsPage/>}/>
        </Route>
    </Routes>
  )
}
