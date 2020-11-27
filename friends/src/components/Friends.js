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
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const Friends = () => {

  const history = useHistory();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    history.push("/");
  };
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
      <br />
      <>
      <Button color="secondary" size="lg" onClick={handleSubmit} block>
        Log Out
      </Button>{''}
      </>
    </div>
  );
};

export default Friends;
