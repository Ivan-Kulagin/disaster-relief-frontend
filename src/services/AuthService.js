import api from '@/services/api';

// AuthService
export const login = (id, password) => api().post('/auth/login', {id, password});
export const logout = () => api().post('/auth/logout')

// VolunteerService
export const getMap = () => api().get('/panel/map')
export const getReports = () => api().get('/panel/reports')
export const getReportByID = (id) => api().get(`/panel/reports/${id}`)

// InstructionsService
export const getInstructionsAll = () => api().get(`/instructions/all`)
export const getInstructionsByID = (id) => api().get(`/instructions/${id}`)

// ReportService
export const sendReport = (report) => api().post(`/report`, report)

// NotificationsService
export const getNotificationsUnread = () => api().get(`/notifications/unread`)
export const getNotificationsByID = (id) => api().get(`/instructions/${id}`)
export const toggleNotifications = (isEnabled) => api().put(`/notifications/active/${isEnabled}`)
