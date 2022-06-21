import React from "react";
import {Button,Input,Select,RadioGroup,Radio}from '@chakra-ui/react'



import {Modal,ModalBody,} from '@chakra-ui/react'
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  let [show,setShow]=React.useState(false)
//  let handleclick=()=>{
//    setShow(!show)
//  }
//  const { isOpen, onOpen, onClose } = React.useDisclosure()
  return (
    <div>
      <div>Helo</div>
      <Button  my={4} data-cy="add-product-button">Add Product</Button>
     <Modal >
       <input placeholder="enter name"></input>
        <div>hey</div>
        <ModalBody pb={6}>
          <Input placeholder="Entername"data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirts</option>
            <option data-cy="add-product-category-pant">Pants</option>
            <option data-cy="add-product-category-jeans">Jeans</option> 
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Submit</Button>
        </ModalBody>
      </Modal>
 </div>
  );
};

   

export default AddProduct;

