import { createWebHistory, createRouter } from 'vue-router'

import Homepage from "@/pages/user/Homepage.vue";
import LoginComponent from "@/components/Login.vue";
import AdminDashboard from '@/pages/admin/AdminDashboard.vue';
import ClassManagement from '@/pages/admin/ClassManagement.vue';
import FileTrainAIManagement from '@/pages/admin/FileTrainAIManagement.vue';
import ExamManagement from '@/pages/admin/ExamManagement.vue';
import EmployeesManagement from '@/pages/admin/EmployeesManagement.vue';
import ClassroomDetail from '@/pages/admin/ClassroomDetail.vue';
import AnalysisChart from '@/pages/admin/AnalysisChart.vue';

const routes = [
    { path: '/', component: Homepage },
    { path: '/login', component: LoginComponent },

    {
        path: '/admin-dashboard',
        component: AdminDashboard,
        children: [
            { path: '', component: AnalysisChart, name: 'AnalysisChart' },
            { path: 'class-management', component: ClassManagement, name: 'ClassManagement'},
            { path: 'class-management/class/:id', component: ClassroomDetail, name: 'ClassroomDetail' },
            { path: 'employees-management', component: EmployeesManagement, name: 'EmployeesManagement' },
            { path: 'file-train-ai-management', component: FileTrainAIManagement, name: 'FileTrainAIManagement' },
            { path: 'exam-management', component: ExamManagement, name: 'ExamManagement' },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;