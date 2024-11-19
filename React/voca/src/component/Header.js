import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">���� ���ܾ�(���)</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          �ܾ� �߰�
        </a>
        <a href="#x" className="link">
          Day �߰�
        </a>
      </div>
    </div>
  );
}