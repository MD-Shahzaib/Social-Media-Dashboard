import React from 'react';
import FollowerCard from './FollowerCard';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';

const Followers = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto pb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 border-r-900">

      <FollowerCard
        icon={facebook}
        username="nathanf"
        count={1987}
        countLabel="Followers"
        todayCount={12}
        isUp={true}
        highlighter={"border-blue-600"}
      />
      <FollowerCard
        icon={instagram}
        username="realnathanf"
        count={"11K"}
        countLabel="Followers"
        todayCount={1099}
        isUp={true}
        highlighter={"border-pink-500"}
      />
      <FollowerCard
        icon={twitter}
        username="nathanf"
        count={1044}
        countLabel="Followers"
        todayCount={99}
        isUp={true}
        highlighter={"border-blue-500"}
      />
      <FollowerCard
        icon={youtube}
        username="NathanF."
        count={8239}
        countLabel="subscribers"
        todayCount={144}
        isUp={false}
        highlighter={"border-red-700"}
      />
    </section>
  );
};

export default Followers;