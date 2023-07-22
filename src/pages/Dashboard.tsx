import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import SingleTable from "../components/admin/SingleTable";

function Dashboard() {
  const selectdata:any = useSelector((state) => state);

  return (
    <div style={{ backgroundColor: "#0f172a", color: "#94a9c9" }}>
      <div className=" dash container pb-5">
        <h1 className=" text-center">Dashboard</h1>
        <LinkContainer to="add">
          <Button variant="danger">Add blog</Button>
        </LinkContainer>
        <Table
          className="mt-5 container"
          style={{ backgroundColor: "#0f172a", color: "#94a9c9" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Title</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {selectdata.map((item:any, i:any) => {
              return (
                <SingleTable
                  count={i}
                  key={i}
                  title={item.title}
                  desc={item.desc}
                  id={item.id}
                  photo={item.photo}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
