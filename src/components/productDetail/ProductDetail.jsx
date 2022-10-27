import React from "react";

import InventoryIcon from "@mui/icons-material/Inventory";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import img1 from "../../assets/type_food/chinese.jpg";

import ProductSlide from "../productSlide/ProductSlide";
import "./productDetail.scss";

const ProductDetail = (props) => {
  return (
    <div className="product-detail">
      <div className="backdrop"></div>
      <div className="product-container">
        <div className="product-main">
          <div className="product-info">
            <div className="box-img">
              <img src={img1} alt="" />
            </div>
            <div className="main-info">
              <h1>Product's Name</h1>
              <h2>Name's shop</h2>
              <div className="rate">
                <div>Rating : </div>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <div className="count">99+</div>
              </div>
              <div className="describe">
                <h5>Detail</h5>
                <span>
                  Traditional Medicinals' Throat Coat Bagged Tea Is Made With
                  Certified USDA Organic And Verified Non-GMO Ingredients. Each
                  Box Contains 16 Tea Bags Of Our Naturally Caffeine Free Herbal
                  Tea. Ingredients Like Slippery Elm Bark Combined With Licorice
                  And Marshmallow Root Soothes The Throat And Supports Vocal
                  Health. See Label For Warnings And Risks.
                </span>
              </div>
            </div>
            <div className="product-buy">
              <div>
                <h2>$100</h2>
                <div className="icon-stock">
                  <InventoryIcon />
                  In stock
                </div>
                <div className="number-item">
                  <input class="form-control" type="number"></input>
                </div>
                <div className="btn-add">
                  <button type="button" className="btn btn-lg btn-block">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-product">
          <ProductSlide title="Related Items" />
          <ProductSlide title="Related Items" />
        </div>
        <div className="product-comment">
          <div className="comment-container">
            <h1>Đánh giá - Nhận xét từ khách hàng</h1>
            <div className="comment-total">
              <div className="rate-total">
                <div>
                  <div className="rate-number">
                    <span>4.3</span>
                    <span>/</span>
                    <span>5</span>
                  </div>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.3}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </div>
                <div className="note">
                  Đây là thông tin người mua đánh giá shop bán sản phẩm này có
                  đúng mô tả không.
                </div>
              </div>
              <div className="rate-detail">
                <div className="rate-star">
                  <Stack spacing={1} className="star">
                    <Rating
                      name="half-rating-read"
                      defaultValue={5}
                      precision={1}
                      readOnly
                    />
                  </Stack>
                  <Box width={150} className="range-count">
                    <Slider
                      size="medium"
                      defaultValue={95}
                      aria-label="Disabled slider"
                      valueLabelDisplay="auto"
                      disabled
                    />
                  </Box>
                  <span className="rate-count">1</span>
                </div>
                <div className="rate-star">
                  <Stack spacing={1} className="star">
                    <Rating
                      name="half-rating-read"
                      defaultValue={4}
                      precision={1}
                      readOnly
                    />
                  </Stack>
                  <Box width={150} className="range-count">
                    <Slider
                      size="medium"
                      defaultValue={80}
                      aria-label="Disabled slider"
                      valueLabelDisplay="auto"
                      disabled
                    />
                  </Box>
                  <span className="rate-count">1</span>
                </div>
                <div className="rate-star">
                  <Stack spacing={1} className="star">
                    <Rating
                      name="half-rating-read"
                      defaultValue={3}
                      precision={1}
                      readOnly
                    />
                  </Stack>
                  <Box width={150} className="range-count">
                    <Slider
                      size="medium"
                      defaultValue={60}
                      aria-label="medium"
                      valueLabelDisplay="auto"
                      disabled
                    />
                  </Box>
                  <span className="rate-count">1</span>
                </div>
                <div className="rate-star">
                  <Stack spacing={1} className="star">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2}
                      precision={1}
                      readOnly
                    />
                  </Stack>
                  <Box width={150} className="range-count">
                    <Slider
                      size="medium"
                      defaultValue={30}
                      aria-label="medium"
                      valueLabelDisplay="auto"
                      disabled
                    />
                  </Box>
                  <span className="rate-count">1</span>
                </div>
                <div className="rate-star">
                  <Stack spacing={1} className="star">
                    <Rating
                      name="half-rating-read"
                      defaultValue={1}
                      precision={1}
                      readOnly
                    />
                  </Stack>
                  <Box width={150} className="range-count">
                    <Slider
                      size="medium"
                      defaultValue={0}
                      aria-label="medium"
                      valueLabelDisplay="auto"
                      disabled
                    />
                  </Box>
                  <span className="rate-count">0</span>
                </div>
              </div>
            </div>
            <div className="list-comment">
              <div className="comment-content">
                <div className="user-comment">
                  <div className="box-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="content">
                    <div className="content-user-rate">
                      <div className="user-info">
                        <h4>name's user</h4>
                        <span>
                          <i>12:33 | 10/10/2022</i>
                        </span>
                      </div>
                      <div className="user-rate">
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="user-comment-content">
                      <p>
                        Gửi sản phẩm/vé dịch vụ nhanh. hàng đến nhanh hơn mình
                        tưởng, chất lượng thì chưa thể đánh giá ngay nhưng mẫu
                        mã giống hình, hàng ngon lành có điều hộp đừng đồng hồ
                        nhìn hơi thô 1 chút, dù sao cũng rất ổn, thanks shop ???
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-content">
                <div className="user-comment">
                  <div className="box-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="content">
                    <div className="content-user-rate">
                      <div className="user-info">
                        <h4>name's user</h4>
                        <span>
                          <i>12:33 | 10/10/2022</i>
                        </span>
                      </div>
                      <div className="user-rate">
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="user-comment-content">
                      <p>
                        Gửi sản phẩm/vé dịch vụ nhanh. hàng đến nhanh hơn mình
                        tưởng, chất lượng thì chưa thể đánh giá ngay nhưng mẫu
                        mã giống hình, hàng ngon lành có điều hộp đừng đồng hồ
                        nhìn hơi thô 1 chút, dù sao cũng rất ổn, thanks shop ???
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-content">
                <div className="user-comment">
                  <div className="box-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="content">
                    <div className="content-user-rate">
                      <div className="user-info">
                        <h4>name's user</h4>
                        <span>
                          <i>12:33 | 10/10/2022</i>
                        </span>
                      </div>
                      <div className="user-rate">
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="user-comment-content">
                      <p>
                        Gửi sản phẩm/vé dịch vụ nhanh. hàng đến nhanh hơn mình
                        tưởng, chất lượng thì chưa thể đánh giá ngay nhưng mẫu
                        mã giống hình, hàng ngon lành có điều hộp đừng đồng hồ
                        nhìn hơi thô 1 chút, dù sao cũng rất ổn, thanks shop ???
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-content">
                <div className="user-comment">
                  <div className="box-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="content">
                    <div className="content-user-rate">
                      <div className="user-info">
                        <h4>name's user</h4>
                        <span>
                          <i>12:33 | 10/10/2022</i>
                        </span>
                      </div>
                      <div className="user-rate">
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="user-comment-content">
                      <p>
                        Gửi sản phẩm/vé dịch vụ nhanh. hàng đến nhanh hơn mình
                        tưởng, chất lượng thì chưa thể đánh giá ngay nhưng mẫu
                        mã giống hình, hàng ngon lành có điều hộp đừng đồng hồ
                        nhìn hơi thô 1 chút, dù sao cũng rất ổn, thanks shop ???
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-content">
                <div className="user-comment">
                  <div className="box-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="content">
                    <div className="content-user-rate">
                      <div className="user-info">
                        <h4>name's user</h4>
                        <span>
                          <i>12:33 | 10/10/2022</i>
                        </span>
                      </div>
                      <div className="user-rate">
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={2.5}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="user-comment-content">
                      <p>
                        Gửi sản phẩm/vé dịch vụ nhanh. hàng đến nhanh hơn mình
                        tưởng, chất lượng thì chưa thể đánh giá ngay nhưng mẫu
                        mã giống hình, hàng ngon lành có điều hộp đừng đồng hồ
                        nhìn hơi thô 1 chút, dù sao cũng rất ổn, thanks shop ???
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
