import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Comment,CommentForm,CommentErrors } from "../../interfaces/comment/comment.interface";

export default function useComment() {
    const listComment = ref([]);
    const router = useRouter();
    const comment = ref<Comment[]>([]);
    const validationErrors = ref<CommentErrors>({});
    const commentForm = reactive<CommentForm>({
        comment: ""
    });

    const getAllComment = (idTask: number) => {
        return window.axios
            .get("task/" + idTask+ "/comment")
            .then((res) => {
                listComment.value = res.data.data;
                console.log(listComment.value, "listComment");
            })
            .catch((err) => console.log(err));
    };

    const createComment = (idTask: number) => {
        console.log(commentForm, "mes commentaires");
        return window.axios
            .post("/api/task/" + idTask + "/comment",commentForm)
            .then((res) => {
                commentForm.comment="";
                getAllComment(idTask);
                
            })
            .catch((err) => console.log(err));
    };

    const deleteComment = (idTask: number, idComment: number) => {
        return window.axios
            .delete("/api/task/" + idTask + "/comment/" + idComment)
            .then((res) => {
                getAllComment(idTask);
            })
            .catch((err) => console.log(err));
    };

    return {
        getAllComment,
        listComment,
        comment,
        deleteComment,
        createComment,
        commentForm,
        validationErrors,
    };
}
