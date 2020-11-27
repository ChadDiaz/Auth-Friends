import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import "../App.css";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log("cd: Friends.js: useEffect: res: ", res);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <Container>
          <Row>
            <Card className="cardContainer">
              <CardBody>
                <CardTitle tag="h3">{friend.name}</CardTitle>
                <CardText>{`I'm ${friend.age} yrs. old`}</CardText>
                <CardFooter>{`${friend.email} is my email address`}</CardFooter>
              </CardBody>
            </Card>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default Friends;
