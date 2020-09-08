
import styled from 'styled-components';

export const Container = styled.div`
z-index:1;
.body-main{
  position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width:100%;
}
.body-goup{
  margin-top:60px;
  padding-left: 250px;
    width: 1333px;
    z-index: 1;
}

.nav-menu{
  width:100%;
  height: 50px;
  position:fixed;
  z-index:4;
}
  .main_container {
    position: relative;
    width: 100%;
    height: 85vh;
    border: 1px solid #ddd;
    float: left;
    margin: 10px 16px;
  }

  .main_content {
    display: flex;
    >.aside_left {
      width: 230px;
      background: #f6f6f6;
      border-right: 1px solid #ddd;
      height: 75.5vh;
    }
  }

  .program_content {
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 10px 5px;
    height: 40px;
    cursor: pointer;
    >span {
      display: block;
      padding-left: 10px;
      margin-top: 10px;
      color: #555;
      text-align: left;
    }
  }

  .group_container {
    width: calc(100% - 230px);
  }

  .list_groups {
    display: flex;
    margin: 10px 20px;
    justify-content: space-between;
  }

  .list_checked {
    width: 70%;
    .cards {
      width: 90%;
      height: 300px;
      border: 1px solid #ddd;

      >.card_header {
        border-bottom: 1px solid #ddd;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
      }
    }
  }

  .list_notChecked {
    width: 30%;
    height: 100%;
    >.noCheked {
      border: 1px solid #ddd;
      background: #fafafa;
      height: 30px;
      margin: 7px 0;
      >span {
        display: block;
        margin: 5px;
        text-align: center;
      }
    }
  }

  .icon {
    cursor: pointer;
    margin: 0 7px;
    color: #555;
    opacity: 0.8;
  }
`;

