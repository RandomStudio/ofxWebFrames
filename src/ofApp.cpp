#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    vidGrabber.setDeviceID(0);
    vidGrabber.setDesiredFrameRate(30);
    vidGrabber.initGrabber(1920, 1080);
}

//--------------------------------------------------------------
void ofApp::update(){
    vidGrabber.update();
}

//--------------------------------------------------------------
void ofApp::draw(){
    ofBackground(100, 100, 100);
    vidGrabber.draw(20, 20);
    // vidGrabber.draw(0,0);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

    if (key == 'e') {
        // ofLogNotice("encoding image");
        ofPixels px;
        px.setFromPixels(vidGrabber.getPixels().getData(), vidGrabber.getWidth(), vidGrabber.getHeight(), vidGrabber.getPixelsRef().getImageType());

        ofBuffer imageBuffer;
        ofSaveImage(px, imageBuffer, OF_IMAGE_FORMAT_JPEG, OF_IMAGE_QUALITY_LOW);

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