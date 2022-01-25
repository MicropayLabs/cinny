import React from 'react';
import PropTypes from 'prop-types';


import colorMXID from '../../../util/colorMXID';

import Text from '../../atoms/text/Text';
import Avatar from '../../atoms/avatar/Avatar';

function RoomIntro({
  roomId, avatarSrc, name, heading, desc, time,
}) {
  return (
    <div className="room-intro">
      <Avatar imageSrc={avatarSrc} text={name} bgColor={colorMXID(roomId)} size="large" />
      <div className="room-intro__content">
        <Text className="room-intro__name" variant="h1" weight="medium" primary>{heading}</Text>
        <Text className="room-intro__desc" variant="b1">{desc}</Text>
        { time !== null && <Text className="room-intro__time" variant="b3">{time}</Text>}
      </div>
    </div>
  );
}

RoomIntro.defaultProps = {
  avatarSrc: null,
  time: null,
};

RoomIntro.propTypes = {
  roomId: PropTypes.string.isRequired,
  avatarSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  name: PropTypes.string.isRequired,
  heading: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
  time: PropTypes.node,
};

export default RoomIntro;
