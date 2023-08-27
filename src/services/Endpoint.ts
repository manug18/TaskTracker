export enum Endpoints {
  login = "auth/login",
  logout = "auth/logout",
  getAllTasks = "api/v1/task",
}

/**
 * Unauthenticated routes
 * Endpoints that do not redirect to login on auth error
 */
export const UNAUTHENTICATED_ROUTES = [Endpoints.login];
