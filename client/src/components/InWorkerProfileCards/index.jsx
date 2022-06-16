import React from "react";
import {
  CardImg,
  CardParent,
  CardTitle,
  CardLink,
  Grid,
  TitleContainer
} from "./styledWorkerProfileCards";
import { Link } from "react-router-dom";

export default function ProfilePostDetailCard({ title, img, id }) {
  return (
    <CardParent>
      <CardImg img={img} />
      <TitleContainer>
        <CardLink to={`/posts/detail/${id}`}>
          <CardTitle>{title}</CardTitle>
        </CardLink>
      </TitleContainer>
    </CardParent>
  );
}
