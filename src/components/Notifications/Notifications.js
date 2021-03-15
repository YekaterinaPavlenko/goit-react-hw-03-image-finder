import React from 'react';
const Notifications = searchQuery => {
  console.log(this.props);
  const { serchQuery } = this.props;
  console.log(serchQuery);
  if (!serchQuery) {
    return <p>Please enter image name!</p>;
  }
  return;
};
export default Notifications;
