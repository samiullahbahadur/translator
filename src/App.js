import React from "react";
import CommentDetails from "./components/CommentDetails";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./components/ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          image={faker.image.avatar()}
          timeAgo="Today at 4:45PM"
          contents={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Alex"
          image={faker.image.avatar()}
          timeAgo="Today at 5:45PM"
          contents={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          image={faker.image.avatar()}
          timeAgo="Today at 6:05PM"
          contents={faker.hacker.phrase()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
