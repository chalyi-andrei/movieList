// @flow
import React from "react";
import styled from "styled-components";

import img from "./assets/favorite.png";

const Circle = require("rc-progress").Circle;

export default props => {
  return (
    <Card>
      <Img url={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}>
        <FavoriteBlock>
          <FavoriteIcon />
        </FavoriteBlock>
      </Img>
      <Info>
        <Header>
          <Count>
            <Circle
              percent={props.vote_average * 10}
              strokeWidth="10"
              trailWidth="9"
              strokeColor={props.vote_average > 7 ? "#69c778" : "#ccc53c"}
            />
            <Number>{props.vote_average * 10}</Number>
          </Count>
          <Title>
            {props.title}
            <Date>{props.release_date}</Date>
          </Title>
        </Header>
        <Descriptions>{props.overview.slice(0, 200)}...</Descriptions>
        <MoreBlock>
          <More>Подробнее</More>
        </MoreBlock>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(50% - 20px);
  background-color: #fff;
  margin-bottom: 30px;
`;
const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: calc(100% - 190px);
  flex-directions: column;
  border-left: 1px solid #f4f4f4;
  padding: 10px 0 10px 0;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Count = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  position: relative;
`;
const Date = styled.span`
  display: block;
  text-align: left;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-top: 5px;
`;
const Title = styled.h1`
  text-align: left;
  max-width: 215px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #222;
  margin-left: 10px;
`;
const FavoriteBlock = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: default;
`;
const Img = styled.div.attrs({
  url: props => props.url
})`
  min-height: 270px;
  position: relative;
  width: 185px;
  background-image: url(${props => props.url});
  background-size: cover;
  cursor: pointer;
  &: hover ${FavoriteBlock} {
    display: flex;
  };
`;
const FavoriteIcon = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url(${img});
  background-size: cover;
  padding: 2px 3px;
`;
const Descriptions = styled.div`
  width: 100%;
  padding: 10px;
  color: #4d4d4d;
  font-size: 14px;
`;
const MoreBlock = styled.div`
  border-top: 1px solid #f4f4f4;
  padding-top: 20px;
  width: 100%;
`;
const More = styled.div`
  padding-left: 20px;
`;
const Number = styled.div`
  position: absolute;
  top: 12px;
  left 0;
  transform: translateX(87%);
  font-size: 13px;
  font-weight: 600;
`;
