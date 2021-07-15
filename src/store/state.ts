import { Task } from "@/types"

export interface ModuleState{

}
export interface TaskState extends ModuleState{
    listTask: Task[],
    task: Task,
}
export interface RootState{
    task:TaskState
}
