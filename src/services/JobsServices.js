import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Job } from "@/models/Job.js"
import { AppState } from "@/AppState.js"


class JobsServices {

    async getJobs() {
        const response = await api.get('api/jobs')
        logger.log('Got jobs', response.data)
        const jobs = response.data.map(pojo => new Job(pojo))
        AppState.jobs = jobs
    }

    async createJob(jobData) {
        const response = await api.post('api/jobs', jobData)
        logger.log('CREATED JOB', response.data)
        const job = new Job(response.data)
        AppState.jobs.push(job)
    }
}

export const jobsServices = new JobsServices()