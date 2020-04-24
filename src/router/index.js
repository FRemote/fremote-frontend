import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


import Layout from '@/layout'


export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/profile",
    component: Layout,
    redirect: "/profile/index",
    hidden: true,
    children: [
      {
        path: "index",
        component: () => import("@/views/profile/index"),
        name: "Profile",
        meta: { title: "Profile", icon: "user", noCache: true }
      }
    ]
  }
];

export const asyncRoutes = [
  {
    path: "/requests",
    component: Layout,
    name: "Request",
    meta: {
      title: "Request work from home",
      icon: "guide"
    },
    children: [
      {
        path: "",
        component: () => import("@/views/table/request"),
        name: "Request",
        meta: { title: "Request" }
      }
    ]
  },
  {
    path: "/requests/:id",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "",
        component: () => import("@/views/request"),
        meta: { title: "Request detail" }
      }
    ]
  },
  {
    path: "/working-today",
    component: Layout,
    name: "Table",
    meta: {
      title: "Working today",
      icon: "peoples"
    },
    children: [
      {
        path: "",
        component: () => import("@/views/table/working-today"),
        name: "Working today",
        meta: { title: "Working today" }
      }
    ]
  },
  {
    path: "/working-today/:id",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "",
        component: () => import("@/views/working-today"),
        name: "Working today",
        meta: { title: "Working today detail" }
      }
    ]
  },
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    alwaysShow: true,
    name: "Permission",
    meta: {
      title: "Permission",
      icon: "lock",
      roles: ["admin", "editor"]
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page"),
        name: "PagePermission",
        meta: {
          title: "Page Permission",
          roles: ["admin"] // or you can only set roles in sub nav
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive"),
        name: "DirectivePermission",
        meta: {
          title: "Directive Permission"
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: "role",
        component: () => import("@/views/permission/role"),
        name: "RolePermission",
        meta: {
          title: "Role Permission",
          roles: ["admin"]
        }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: "/excel/export-excel",
    name: "Excel",
    meta: {
      title: "Excel",
      icon: "excel"
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'Export Data' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
