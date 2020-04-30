import CommonService from './common.service'

export const ProductService = {
  getListProduct () {
    return CommonService.getAll('https://py-foods-api.herokuapp.com/api/products')
  }
}
