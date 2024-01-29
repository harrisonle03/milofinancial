import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";

import { Link, Outlet } from "react-router-dom"
 
export default function Sidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#1F2833]">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h3" color="cyan">
          Milo Financial
        </Typography>
      </div>
      <List>
        <Link to="/Dashboard">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link to="/Transactions">
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Transactions
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Expenses
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Income
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ArrowUpCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Sign Up
        </ListItem>
      </List>
    </Card>
  );
}