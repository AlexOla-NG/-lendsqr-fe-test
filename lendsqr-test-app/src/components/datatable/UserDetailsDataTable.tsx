import React from "react";
import { ITableRow } from "./interface";

const UserDetailsDataTable = (userData: ITableRow) => {
  const { email, profile, education, socials, guarantor } = userData;
  return (
    <div className="user-info-datatable">
      <div className="datatable">
        <div className="table-row">
          <h4>Personal Information</h4>
          <div className="row-content">
            <div className="cell-data">
              <h5>full name</h5>
              <p>
                {profile?.firstName} {profile?.lastName}
              </p>
            </div>
            <div className="cell-data">
              <h5>phone number</h5>
              <p>{profile?.phoneNumber}</p>
            </div>
            <div className="cell-data">
              <h5>email address</h5>
              <p className="email">{email}</p>
            </div>
            <div className="cell-data">
              <h5>bvn</h5>
              <p>{profile?.bvn}</p>
            </div>
            <div className="cell-data">
              <h5>gender</h5>
              <p>{profile?.gender}</p>
            </div>
            <div className="cell-data">
              <h5>marital status</h5>
              <p>single</p>
            </div>
            <div className="cell-data">
              <h5>children</h5>
              <p>none</p>
            </div>
            <div className="cell-data">
              <h5>type of residence</h5>
              <p>parent's apartment</p>
            </div>
          </div>
        </div>
        <div className="table-row">
          <h4>Education and Employment</h4>
          <div className="row-content">
            <div className="cell-data">
              <h5>level of education</h5>
              <p>{education?.level}</p>
            </div>
            <div className="cell-data">
              <h5>employment status</h5>
              <p>{education?.employmentStatus}</p>
            </div>
            <div className="cell-data">
              <h5>sector of employment</h5>
              <p>{education?.sector}</p>
            </div>
            <div className="cell-data">
              <h5>duration of employment</h5>
              <p>{education?.duration}</p>
            </div>
            <div className="cell-data">
              <h5>office email</h5>
              <p className="email">{education?.officeEmail}</p>
            </div>
            <div className="cell-data naira-sign">
              <h5>monthly income</h5>
              <p>
                <span>N{education?.monthlyIncome[0]} - </span>{" "}
                <span> N{education?.monthlyIncome[1]}</span>
              </p>
            </div>
            <div className="cell-data">
              <h5>loan repayment</h5>
              <p>{education?.loanRepayment}</p>
            </div>
          </div>
        </div>
        <div className="table-row">
          <h4>Socials</h4>
          <div className="row-content">
            <div className="cell-data">
              <h5>twitter</h5>
              <p className="email">{socials?.twitter}</p>
            </div>
            <div className="cell-data">
              <h5>facebook</h5>
              <p className="email">{socials?.facebook}</p>
            </div>
            <div className="cell-data">
              <h5>instagram</h5>
              <p className="email">{socials?.instagram}</p>
            </div>
          </div>
        </div>
        <div className="table-row">
          <h4>Guarantor</h4>
          <div className="row-content">
            <div className="cell-data">
              <h5>full name</h5>
              <p>
                {guarantor?.firstName} {guarantor?.lastName}
              </p>
            </div>
            <div className="cell-data">
              <h5>phone number</h5>
              <p>{guarantor?.phoneNumber}</p>
            </div>
            <div className="cell-data">
              <h5>email address</h5>
              <p className="email">{guarantor?.firstName}@gmail.com</p>
            </div>
            <div className="cell-data">
              <h5>relationship</h5>
              <p>sister</p>
            </div>
          </div>
        </div>
        <div className="table-row">
          <h4>Guarantor</h4>
          <div className="row-content">
            <div className="cell-data">
              <h5>full name</h5>
              <p>
                {guarantor?.firstName} {guarantor?.lastName}
              </p>
            </div>
            <div className="cell-data">
              <h5>phone number</h5>
              <p>{guarantor?.phoneNumber}</p>
            </div>
            <div className="cell-data">
              <h5>email address</h5>
              <p className="email">{guarantor?.firstName}@gmail.com</p>
            </div>
            <div className="cell-data">
              <h5>relationship</h5>
              <p>sister</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsDataTable;
