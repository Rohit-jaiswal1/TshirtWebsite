import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../../components/ui/badge";
import Draggable from "react-draggable";
import axios from "axios";  // Axios for making API requests
import { User } from "lucide-react";

const EditProduct = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [text, setText] = useState("");
  const [elements, setElements] = useState([]);
  const [userId, setUserId] = useState("12345"); // You should get the logged-in user's ID dynamically, for now, using a placeholder.

  // Handle adding custom text to the t-shirt design
  const handleAddText = () => {
    setElements([...elements, { type: "text", content: text, x: 0, y: 0 }]);
    setText("");
  };

  // Handle removing an element (text/image) from the design
  const handleRemoveElement = (index) => {
    setElements(elements.filter((_, i) => i !== index));
  };

  // Handle adding custom image to the t-shirt design
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setElements([
          ...elements,
          { type: "image", content: reader.result, x: 0, y: 0 },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  

  return (
    <div className="w-screen h-screen overflow-y-scroll bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <Card className="w-full bg-pink-500   max-w-sm mx-auto">
        <div className="w-full h-full relative bg-green-400">
          <img
            src={product?.image}
            alt={product?.title}
            className="relative bg-red-400 w-full h-[300px] object-cover rounded-t-lg"
          />
          {elements.map((element, index) => (
            <Draggable
              key={index}
              bounds="parent"
              defaultPosition={{ x: element.x, y: element.y }}
            >
              <div className="absolute">
                {element.type === "text" ? (
                  <span className="text-red-500 p-1 cursor-pointer">
                    {element.content}
                  </span>
                ) : (
                  <img
                    src={element.content}
                    alt="Added"
                    className="w-16 h-16 cursor-pointer"
                  />
                )}
              </div>
            </Draggable>
          ))}
          {product?.totalStock === 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-muted-foreground">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-[16px] text-muted-foreground">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              Rs. {product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-primary">
                Rs. {product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
        <div className="flex-col">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
            className="w-full mb-2 p-2 border"
          />
          <Button onClick={handleAddText} className="w-full mb-2">
            Add Text
          </Button>
          <ul className="mb-2">
            {elements
              .filter((element) => element.type === "text")
              .map((element, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{element.content}</span>
                  <Button
                    onClick={() => handleRemoveElement(index)}
                    className="ml-2"
                  >
                    Remove
                  </Button>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex-col">
          <input
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            className="w-full mb-2"
          />
          <Button className="w-full mb-2">Add Image</Button>
          <ul className="mb-2">
            {elements
              .filter((element) => element.type === "image")
              .map((element, index) => (
                <li key={index} className="flex justify-between items-center">
                  <img src={element.content} alt="Added" className="w-16 h-16" />
                  <Button
                    onClick={() => handleRemoveElement(index)}
                    className="ml-2"
                  >
                    Remove
                  </Button>
                </li>
              ))}
          </ul>
          
        </div>
      </Card>
    </div>
  );
};

export default EditProduct;

















