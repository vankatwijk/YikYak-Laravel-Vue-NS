<template>
    <section class="page-container">
        <header-global></header-global>
        <!-- End header -->
            <v-content>
                <v-container
                fluid
                >
                    <v-toolbar 
                        dense
                        flat
                    >
                        <v-spacer></v-spacer>

                        <v-btn outlined color="primary"
                        >Add User</v-btn>
                    <!-- <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn> -->
                    </v-toolbar>

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
                                                label="Title"
                                                name="channel-title"
                                                prepend-icon="mdi-format-color-text"
                                                type="text"
                                                ></v-text-field>
                                                <!-- End Text Field -->
                                                <v-text-field
                                                label="Address"
                                                name="address"
                                                prepend-icon="mdi-map-marker"
                                                type="text"
                                                ></v-text-field>
                                                <!-- End Text Field -->
                                                <v-textarea
                                                prepend-icon="mdi-comment"
                                                name="description"
                                                label="Description"
                                                auto-grow
                                                value=""
                                                ></v-textarea>
                                                <!-- End Textarea Field -->
                                                <v-btn color="primary"
                                                x-large
                                                block
                                                >Add Note</v-btn>
                                            </v-form>
                                            <leaflet-map-component></leaflet-map-component>
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
                                <v-list>
                                    <v-subheader>History Notes</v-subheader>
                                    <v-list-item-group color="primary">
                                    <v-list-item
                                        v-for="(item, i) in item_channel"
                                        :key="i"
                                    >
                                        <v-list-item-content>
                                        <v-list-item-title v-html="item.title"></v-list-item-title>
                                        <v-list-item-subtitle v-html="item.description"></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    </v-list-item-group>
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
    
    data: () => ({
        users_list : [
            { title : 'Monument 1', description : 'This monument is situated on top of the plaza', address : 'triq il bisazza' },
            { title : 'Monument 2', description : 'This monument is situated on top of the plaza', address : 'triq il bisazza 1' },
            { title : 'Monument 3', description : 'This monument is situated on top of the plaza', address : 'triq il bisazza 2' },
            { title : 'Monument 4', description : 'This monument is situated on top of the plaza', address : 'triq il bisazza 3' },
        ]
    }),
}
</script>

<style scoped>
</style>