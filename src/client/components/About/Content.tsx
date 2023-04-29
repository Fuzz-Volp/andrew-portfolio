import React from "react";
import IComponentProps from "../../@types/component";

const Content: React.FunctionComponent<IComponentProps> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <h1>About the Artist</h1>
      <main>
        <h2>Andrew Thompson</h2>
        <p>
          Andrew Thompson is an artis and game designer who graduated with a
          Bachelors of Science in Fine Arts from Harding University. After
          nearly six years of development, his most recent creative work is
          Rurh: The Northern Realms, a tabletop role-playing game inspired from
          his love of history, storytelling, religion, and western martial arts.
          He has not only develooped a unique and intersting game world with
          robust and fast-playing mechanics, but also illustrated the rulebooks
          in his own compelling artwork style
        </p>
        <p>
          Andrew is open to individual artwork commissions at a set rate in
          various traditional and digital mediums; he also offers selcted
          originals and archived quality prints of his artwork for sale
        </p>
      </main>
    </div>
  );
};

export default Content;
