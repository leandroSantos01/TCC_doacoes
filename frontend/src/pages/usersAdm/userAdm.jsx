import Cabecalho from "../../components/cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";

import { Link, Navigate } from "react-router";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./usersAdm.scss";
import "/src/scss/global.scss";
import "/src/scss/fonts.scss";
import api from "../../api";

export default function UsersAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    const ADM = localStorage.getItem("ADMIN");
    if (ADM == null || ADM == undefined) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <main className="users_admin">
        <div className="central_users"></div>
      </main>
    </div>
  );
}
