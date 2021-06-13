import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getUserDetail, getUserFailure } from "../../redux/github/git.selector";

const GitList = (props) => {
  const { userDetail, error } = props;

  return userDetail.login ? (
    <div>
      <img src={userDetail.avatar_url} alt="" />
      <p>{userDetail.login} </p>
    </div>
  ) : (
    <p>
      <b>{error.message ? error.message : "please search"}</b>
    </p>
  );
};

const mapStateToProps = createStructuredSelector({
  userDetail: getUserDetail,
  error: getUserFailure,
});

export default connect(mapStateToProps)(GitList);
