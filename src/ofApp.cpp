#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    img.load("bikers.jpg");
}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    img.draw(0,0);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

    if (key == 'e') {
        // ofLogNotice("encoding image");
        ofPixels px;
        px.setFromPixels(img.getPixels().getData(), img.getWidth(), img.getHeight(), img.getPixelsRef().getImageType());

        ofBuffer imageBuffer;
        ofSaveImage(px, imageBuffer);

        string reencodedImageData = ofxCrypto::base64_encode(imageBuffer);
        cout << reencodedImageData << endl;
        cout << "EOF" << endl;
    }

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}