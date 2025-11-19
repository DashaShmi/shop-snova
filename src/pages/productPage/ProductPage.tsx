import { useParams } from "react-router-dom";
import { ALL_PRODUCTS } from "../data/ALL_PRODUCTS";
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from "./ProductPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { addProduct, getOrder } from "../../services/slices/OrderSlice";


type ProductParams = {
  productId: string;
};

export default function ProductPage() {
  const dispatch = useAppDispatch();
  const { productId } = useParams<ProductParams>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const product = ALL_PRODUCTS.find(elem => {
    if (elem.id == productId) {
      return true;
    }
  })

  function onClick() {

    if (product !== undefined) {
      const action = addProduct(product);
      // debugger;
      dispatch(action);

      // const action2 = { type: 'order/addProduct', payload: product };
      // dispatch(action2);

      console.log(productId)
    } else {
      console.log("productId не найден (undefined)")
    }

  }

  return (<>

    {product === undefined && (<>
      <h2>Product not found</h2>
    </>)}

    {product && (<>

      <section className={styles.productPage}>
        <div className={styles.page}>

          <div className={styles.preview}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.mySwiper2}
            >

              {
                product.images.map((img) => (
                  <SwiperSlide>
                    <img
                      src={img}
                      alt="картинка Wallets" />
                  </SwiperSlide>
                ))
              }
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={styles.mySwiper}
            >
              {
                product.images.map((img) => (
                  <SwiperSlide>
                    <img
                      src={img}
                      alt="картинка Wallets" />
                  </SwiperSlide>
                ))
              }
            </Swiper>


          </div>
          <div className={styles.info}>
            <h3>{product.name}</h3>
            <p>{product.price} GEL</p>
            <p className={styles.fulllName}>{product.fulllName}</p>
            <div className={styles.bulletsDescription}>{product.description}</div>
            <h4>IMPORTANT</h4>
            <div style={{ fontStyle: 'italic' }}>None of the products look 100% alike, so please note that the product: print and lining you receive may be slightly different from the picture. Each plastic bag I use to make products is unique, making each produced item one of a kind.</div>
            <button onClick={onClick}>Купить</button>
          </div>
        </div>
      </section >
    </>)}

  </>)

}