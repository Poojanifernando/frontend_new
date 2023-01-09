import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import CustomerRegister from "views/CustomerRegister";
import CurrentProcessRegistration from "views/CurrentProcessRegistration";
import BatchRegistration from "views/BatchRegistration";
import ProductRegistration from "views/ProductRegistration";
import ProductLineRegistration from "views/ProductLineRegistration";
import MachineRegistration from "views/MachineRegistration";
import ParameterCode from "views/ParameterCode";
import DeviceRegistration from "views/DeviceRegistration";
import Login from "components/Login/Login";
import LineHeader from "components/LineHeadder/LineHeader";
import BatchUpdate from "components/UpdateForms/BatchUpdate";
import CustomerUpdate from "components/UpdateForms/CustomerUpdate";
import LineUpdate from "components/UpdateForms/LineUpdate";
import ProductUpdate from "components/UpdateForms/ProductUpdate";
import CurrentProcessUpdate from "components/UpdateForms/CurrentProcessUpdate";
import LineMachineDevice from "views/LineMachineDevice";
import DeviceUpdate from "components/UpdateForms/DeviceUpdate";


const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  }
  ,
  // {
  //   path: "/DeviceRegistration",
  //   name: "deviceRegistration",
  //   icon: "nc-icon nc-bell-55",
  //   component: DeviceRegistration,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/BatchRegistration",
  //   name: "batchRegistration",
  //   icon: "nc-icon nc-bell-55",
  //   component: BatchRegistration,
  //   layout: "/admin"
  // },
  // {
  //   path: "/MachineRegistration",
  //   name: "machineRegistration",
  //   icon: "nc-icon nc-bell-55",
  //   component: MachineRegistration,
  //   layout: "/admin"
  // },
  // {
  //   path: "/ParameterCode",
  //   name: "parameterCode",
  //   icon: "nc-icon nc-bell-55",
  //   component: ParameterCode,
  //   layout: "/admin"
  // },

  // {
  //   path: "/MachinesCardView",
  //   name: "machinesCardView",
  //   icon: "nc-icon nc-bell-55",
  //   component: MachinesCardView,
  //   layout: "/admin"
  // },
  // {
  //   path: "/Charts",
  //   name: "charts",
  //   icon: "nc-icon nc-bell-55",
  //   component: Charts,
  //   layout: "/admin"
  // },
  // {
  //   path: "/DashboardForm",
  //   name: "dashboardForm",
  //   icon: "nc-icon nc-bell-55",
  //   component: DashboardForm,
  //   layout: "/admin"
  // },
  // {
  //   path: "/CardParameterbody",
  //   name: "cardParameterbody",
  //   icon: "nc-icon nc-bell-55",
  //   component: CardParameterbody,
  //   layout: "/admin"
  // }

  // ,

  // {
  //   path: "/login",
  //   name: "login",
  //   icon: "nc-icon nc-notes",
  //   component: Login,
  //   layout: "/",
  //   invisible: true
  // }\
  {
    path: "/CustomerRegister",
    name: "Customer",
    icon: "nc-icon nc-notes",
    component: CustomerRegister,
    layout: "/admin"
  },
  {
    path: "/ProductRegistration",
    name: "product",
    icon: "nc-icon nc-notes",
    component: ProductRegistration,
    layout: "/admin"
  } ,
  {
    path: "/ProductLineRegistration",
    name: "Product Line",
    icon: "nc-icon nc-notes",
    component: ProductLineRegistration,
    layout: "/admin"
  },
  {
    path: "/DeviceRegistration",
    name: "Device",
    icon: "nc-icon nc-notes",
    component: DeviceRegistration,
    layout: "/admin"
  }
  ,
  
  {
    path: "/CurrentProcessRegistration",
    name: "Production",
    icon: "nc-icon nc-notes",
    component: CurrentProcessRegistration,
    layout: "/admin"
  },
 

  // ,
  // {
  //   path: "/LineMachineDevice",
  //   name: "LineMachineDevice",
  //   icon: "nc-icon nc-notes",
  //   component: LineMachineDevice,
  //   layout: "/admin"
  // },

  //updates
 
  {
    path: `/updateBatch/:id`,
    name: "updateBatch",
    icon: "nc-icon nc-notes",
    component: BatchUpdate,
    layout: "/admin",
    invisible: true
  }
  ,
  {
    path: `/updateCustomer/:id`,
    name: "Update Customer",
    icon: "nc-icon nc-notes",
    component: CustomerUpdate,
    layout: "/admin",
    invisible: true
  }
  ,
  {
    path: `/updateLine/:id`,
    name: "Update Line",
    icon: "nc-icon nc-notes",
    component: LineUpdate,
    layout: "/admin",
    invisible: true
  }
  ,
  {
    path: `/updateProduct/:id`,
    name: "Update Product",
    icon: "nc-icon nc-notes",
    component: ProductUpdate,
    layout: "/admin",
    invisible: true
  },
  {
    path: `/CurrentProcessUpdate/:id`,
    name: "Current Process Update",
    icon: "nc-icon nc-notes",
    component: CurrentProcessUpdate,
    layout: "/admin",
    invisible: true
  }
  ,
  {
    path: `/DeviceUpdate/:id`,
    name: "Device Update",
    icon: "nc-icon nc-notes",
    component: DeviceUpdate,
    layout: "/admin",
    invisible: true
  }

];

export default dashboardRoutes;
