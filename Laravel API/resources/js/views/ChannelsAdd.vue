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
                                                label="Group Name"
                                                name="channel-name"
                                                v-model="channel_name"
                                                prepend-icon="mdi-format-color-text"
                                                type="text"
                                                ></v-text-field>
                                                <!-- End Text Field -->
                                                <v-btn color="primary"
                                                x-large
                                                block
                                                @click="createChannel"
                                                >Add Group</v-btn>
                                            </v-form>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>
                        <!-- End Col -->
                        <v-col 
                            xs="12"
                            sm="12"
                            md="6"
                            lg="7"
                            xl="8"
                        >
                            <v-card class="list-scrollable">
                                <v-subheader>Channels List</v-subheader>

                                <v-list v-for="(item, i) in channel_list"
                                    :key="i">
                                    <v-list-item :id="item.id"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title v-html="item.name"></v-list-item-title>
                                        </v-list-item-content>                                                                              <v-list-item-action>
                                            <v-btn 
                                            :id="item.id" 
                                            color="primary" 
                                            @click="saveChannelId(item)"
                                            >Add Note</v-btn>
                                            <!-- <v-btn :id="item.id" color="primary" @click="dialog = true, getUserChat()">Chat</v-btn> -->
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-col>
                        <!-- End Col -->
                    </v-row>
                    <!-- End Row -->
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
            channel_name: "",
            channel_list: [],
            //channel_list: this.$store.state.entity.entity_channel,
        }
    },
    components : {
    },
    methods: {
        createChannel : function() {
            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Custom Url for Api Call
            const channelUrl = baseUrl + '/api/channels';

            // Data to send
            const data = {
                name: this.channel_name
            }
            // Session Token
            const token = localStorage.getItem('session_token');

            // Header
            const headers = {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ token,
            }

            this.$http.post(channelUrl, data, {
                headers : headers
            })
            .then((result) => {
                 console.log(result);
                 this.channel_list.unshift(result.data.success);
            })

            //this.$router.push('/login');
            
        },

        listChannels : function() {
            // Base Url of App
            const baseUrl = localStorage.getItem('appUrl');
            // Custom Url for Api Call
            const channelUrl = baseUrl + '/api/channels';

            // Session Token
            const token = localStorage.getItem('session_token');

            // Header
            const headers = {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ token,
            }

            this.$http.get(channelUrl,{ 
                headers : headers
            })
            .then((result) => {
                this.channel_list = result.data.data
            })
        },

        saveChannelId : function(item) {
            // Save current channel to localstorage
            let channelId = item.id; 

            localStorage.setItem('current-channel-id', channelId);
            this.$router.push('/channels-notes');
        }

    },
    mounted : function() {
        // Get Channels List on Load
        this.listChannels()
    }
}
</script>

<style scoped>
</style>