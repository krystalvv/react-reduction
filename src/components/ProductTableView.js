import React, { useState } from 'react';
import PropTypes from 'utils/propTypes';
import { ProductSlider } from '../components/Part/Carousel';

import {
  Table,
  Input,
  Label,
  FormGroup,
  Col,
  Row,
  Badge,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button
} from 'reactstrap';

import {
  MdVerticalAlignBottom,
} from 'react-icons/md'

import {
  AiFillHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai'

import {
  BsChat
} from 'react-icons/bs'
import { useHistory } from 'react-router-dom';

const ProductTableView = ({ headers, rowData, ...restProps }) => {
  const [isOpen, setOpen] = useState(false);
  const [selIndex, setIndex] = useState(false);

  const toggle = () => () => {
    setOpen(!isOpen);
  };

  const productView = (index) => () => {
    setOpen(!isOpen);
    setIndex(index);
  };

  const history = useHistory();

  return (
    <Table relative style={{ minWidth: "1100px" }} hover {...restProps}>
      {/* <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead> */}
      <tbody>
        {rowData.map(({ product_image, date, state, payment, goods, review, remain, total, ...info }, index) => (
          <tr key={index} onClick={() => {
            history.push({
              pathname: `/product-detail`,
              state: { index : index }
            })}}>
            <th className="align-middle" scope="row">
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" className="checkbox" />
                </Label>
              </FormGroup>
            </th>
            <td className="align-middle text-center"><strong>{index + 1}</strong></td>
            <td className="align-middle text-center"><img className='table_image' src={product_image}></img></td>
            <td className="align-middle" style={{}}>
              <Row style={{ margin: "0px" }}>
                <Col style={{ margin: "0px" }}>
                  <div>{info.start_date} {info.end_date && ' ~ '} {info.end_date}</div>
                  <div>{info.order_number} {info.order_product}</div>
                </Col>
              </Row>
            </td>
            <td className="align-middle text-center">
              <AiFillHeart style={{ margin: "10px" }} />{goods}<BsChat style={{ margin: "10px" }} />{review}
            </td>
            <td className="align-middle text-center">{state}</td>
            <td className="align-middle text-center" style={{ whiteSpace: "pre-wrap" }}>{payment}</td>
            <td className="align-middle text-center">
              <AiOutlineShoppingCart style={{ margin: "10px" }} /> <strong style={{ color: "#da4359" }}>{remain}</strong> / {total}건
            </td>
            <td className="align-middle text-center">{date}</td>
            <td className="align-middle text-center"><MdVerticalAlignBottom size={25} /></td>
            {/* <Modal
              isOpen={selIndex === index && isOpen}
              toggle={productView(index)}
              style={{ width: "997px", maxWidth: "80%", height: "800px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              <ModalHeader toggle={productView(index)}>
                상품 상세 정보
              </ModalHeader>
              <ModalBody>
                <ProductSlider data={rowData}>

                </ProductSlider>
              </ModalBody>

            </Modal> */}
          </tr>

        ))}
      </tbody>
    </Table>
  );
};

export default ProductTableView;
