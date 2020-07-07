<template>
    <section class="page-container">
        <header-global></header-global>
        <!-- End header -->
            <v-content>
                <v-container>
                    <v-row>
                        <v-col 
                            xs="12"
                            sm="12"
                            md="6"
                            lg="5"
                            xl="4"
                        >
                            <v-card >
                                <v-container>
                                    <v-row justify="space-between">
                                        <v-col xl="12">
                                            <v-form>
                                                <v-text-field
                                                label="Username"
                                                name="username"
                                                v-model="new_user.username"
                                                prepend-icon="mdi-account-outline"
                                                type="text"
                                                autocomplete="off"
                                                ></v-text-field>

                                                <v-text-field
                                                id="email"
                                                label="Email"
                                                v-model="new_user.email"
                                                name="email"
                                                prepend-icon="mdi-email-outline"
                                                type="email"
                                                autocomplete="off"
                                                ></v-text-field>


                                                <v-text-field
                                                id="password"
                                                label="Password"
                                                v-model="new_user.password"
                                                name="password"
                                                prepend-icon="mdi-lock"
                                                type="password"
                                                autocomplete="off"
                                                ></v-text-field>

                                                <v-text-field
                                                id="password-confirmation"
                                                label="Confirm Password"
                                                v-model="new_user.password_confirm"
                                                name="confirm-password"
                                                prepend-icon="mdi-lock"
                                                type="password"
                                                autocomplete="off"
                                                ></v-text-field>
                                                <!-- End Textarea Field -->
                                                <v-btn color="primary"
                                                x-large
                                                @click="createUser"
                                                block
                                                >Add User </v-btn>
                                            </v-form>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>
                        <!-- End Col Left -->

                        <v-col 
                            xs="12"
                            sm="12"
                            md="6"
                            lg="7"
                            xl="8"
                        >
                            <v-card>
                                <v-list 
                                subheader
                                dense 
                                class="list-scrollable">
                                    <v-subheader>{{ entity_name }} Users List</v-subheader>
                                    <!-- <v-list-item-group color="primary"> -->
                                        <v-list-item
                                            v-for="(item, i) in users_list"
                                            :key="i"
                                        >
                                            <v-list-item-avatar>
                                                <template v-if="item.avatar_path">
                                                <v-img :src="item.avatar_path"></v-img>
                                                </template>
                                                <template v-else>
                                                    <v-icon>mdi-account-supervisor-circle</v-icon>
                                                </template>
                                            </v-list-item-avatar>
                                            <!-- End Item Avatar -->

                                            <v-list-item-content>
                                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                                <!-- <v-list-item-subtitle v-text="item.id"></v-list-item-subtitle> -->
                                            </v-list-item-content>
                                            <!-- End Item Content -->
                                            <v-list-item-action>
                                                <v-btn 
                                                :id="item.id" 
                                                color="primary" 
                                                @click="dialog = true, getUserChat(item)">Chat</v-btn>
                                                <!-- <v-btn :id="item.id" color="primary" @click="dialog = true, getUserChat()">Chat</v-btn> -->
                                            </v-list-item-action>
                                        </v-list-item>
                                    <!-- </v-list-item-group> -->
                                </v-list>

                            </v-card>
                        </v-col>
                        <!-- End Right Col -->
                    </v-row>
                    <!-- End Row -->


                    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                        <v-card class="message-chat-container">
                            <v-toolbar dark color="primary">
                                <v-btn icon dark @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-toolbar-title>Chat</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <!-- <v-btn dark text @click="dialog = false">Save</v-btn> -->
                                </v-toolbar-items>
                            </v-toolbar>
                            <!-- End Toolbar -->
                            <div class="message-chat-list">
                                <v-list 
                                v-for="(item,i) in users_chat"
                                    :key="i"
                                    class="single-message">
                                        <v-list-item
                                        v-bind:class="isSender(item.from_user_id, item.to_user_id)"
                                        v-text="item.message"
                                        >
                                            <v-list-item-avatar>
                                                <v-img :src="item.avatar"></v-img>
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-title v-html="item.message"></v-list-item-title>
                                                <!-- <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle> -->
                                            </v-list-item-content>
                                        </v-list-item>
                                </v-list>
                                <!-- End V List -->
                            </div>
                            <!-- End Message List -->
                            <div class="message-input-container">
                                <v-container fluid>
                                    <v-col xl="12">
                                        <v-textarea
                                        outlined
                                        name="message-textarea"
                                        v-model="textbox_message"
                                        label="Message"
                                        value="Type here your message"
                                        ></v-textarea>
                                    </v-col>
                                    <v-col xl="12">
                                        <v-btn x-large block
                                        @click="postUserMessage"
                                        color="primary">Send Message</v-btn>
                                    </v-col>
                                </v-container>
                            </div>
                            <!-- End Actions textarea -->


                        </v-card>
                         <!-- End Card -->
                    </v-dialog>
                     <!-- End Dialog -->

                </v-container>
                <!-- End Container -->
            </v-content>
            <!-- End Content -->
    </section>
    <!-- End Section -->
</template>

<script>
export default {
    
    data() {
        return {
            username_id : this.$store.state.user_id,
            entity_name : this.$store.state.entity_name,
            dialog: false,
            messagechatinfo: "",
            new_user : {
                username : "",
                email : "",
                password : "",
                password_confirm : "",
            },
            textbox_message : "",
            users_list : this.$store.state.entity_users,
            users_chat: [],
        }
    },
    methods: {
        isSender : function(user_id,rec_id) {
            console.log(user_id);
            console.log(rec_id);
            if(user_id === user_id) {
                return "sender"
            }
            if(rec_id === rec_id) {
                return "other"
            }
        },
        createUser : function() {
            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Custom Url for Api Call
            const registerUrl = baseUrl + '/api/adduser';
            // Session Token
            //const token = this.$store.data.token;
            const token = localStorage.getItem('session_token');

            // Header to post Request 
            const headers = {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ token,
            }
            // Data to send for Registration
            const data = {
                'name': this.new_user.username,
                'email': this.new_user.email,
                'password': this.new_user.password,
                'password-confirm': this.new_user.password_confirm,
            }

            console.log(data);

            this.$http.post(registerUrl, data, {
                headers: headers
            })
            .then((result) => {
                console.log(result);
                this.users_list.unshift(result.data.success)
            })

        },
        // getUserChat : function(item) {
        //     console.log(item.id);
        // }
        getUserChat : function(item) {
            //console.log('this is the element i clicked: ', item.id);
            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Custom Url for Api Call
            const singleChatUrl = baseUrl + '/api/usermessanger/'+ item.id;

            // Save item Id to Storage for use in send message function
            localStorage.setItem('chat-id',item.id);
            // Session Token
            //const token = this.$store.data.token;
            const token = localStorage.getItem('session_token');

            // Header to post Request 
            const headers = {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ token,
            }

            this.$http.get(singleChatUrl, {
                headers : headers,
            })
            .then((result) => {
                console.log(result);
                if(result.data.success == '') {
                    console.log('no messages');
                    // this.messagechatinfo = 'no message'
                } else {
                    this.users_chat = result.data.success

                }
            })
        },
        postUserMessage : function() {

            const chatId = localStorage.getItem('chat-id');
            console.log(chatId);

            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Custom Url for Api Call
            const singleChatUrl = baseUrl + '/api/usermessanger/'+ chatId;
            // Session Token
            //const token = this.$store.data.token;
            const token = localStorage.getItem('session_token');

            // Header to post Request 
            const headers = {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ token,
            }

            const data = {
                message: this.textbox_message
            }

            this.$http.post(singleChatUrl, data, {
                headers : headers,
            })
            .then((result) => {
                console.log(result);
                //this.users_chat = result.data
                this.users_chat.push(result.data.success)
                // if(result.data.success == '') {
                //     console.log('no messages');
                //     this.messagechatinfo = 'no message'
                // } else {
                //     this.users_chat = result.data

                // }
            })
        },
    },
    mounted : function() {
        //this.getUsersList() get users list on load
    }

}
</script>



<style scoped>
.message-chat-container {
    padding: 1.5rem;
}
.message-chat-container .message-input-container {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 15px;
}

.message-chat-container .message-input-container .col {
    padding-top: 0;
    padding-bottom: 0;
}

.message-chat-container .message-chat-list {
    padding: 0 2rem;
    height: 63vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

.message-chat-container .message-chat-list .single-message {
    margin: .75rem;
    max-width: 90%;
    background-color : rgba(25, 118, 210, 0.16)
}

/* .message-chat-container .message-chat-list .sender {
    margin: .75rem;
    max-width: 90%;
    background-color : rgba(25, 118, 210, 1)
} */

</style>